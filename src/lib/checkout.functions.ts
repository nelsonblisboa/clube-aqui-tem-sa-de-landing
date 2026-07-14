import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

const PRICE_ID = "price_1TsswZFdbD1oqfRzyIYN8YJU";

export const createCheckoutSession = createServerFn({ method: "POST" }).handler(
  async () => {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY não configurada");
    }

    const origin =
      getRequestHeader("origin") ||
      `https://${getRequestHeader("host") ?? "clubeaquitemsaude.lovable.app"}`;

    const body = new URLSearchParams();
    body.append("mode", "subscription");
    body.append("line_items[0][price]", PRICE_ID);
    body.append("line_items[0][quantity]", "1");
    body.append("success_url", `${origin}/sucesso?session_id={CHECKOUT_SESSION_ID}`);
    body.append("cancel_url", `${origin}/?checkout=cancel`);
    body.append("allow_promotion_codes", "true");
    body.append("billing_address_collection", "required");
    body.append("locale", "pt-BR");

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const json = (await response.json()) as {
      url?: string;
      error?: { message?: string };
    };

    if (!response.ok || !json.url) {
      console.error("[stripe] checkout error", json);
      throw new Error(json.error?.message || "Falha ao criar checkout Stripe");
    }

    return { url: json.url };
  },
);
