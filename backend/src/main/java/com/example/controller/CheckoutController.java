package com.example.controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.HashMap;
import java.util.Map;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

import io.github.cdimascio.dotenv.Dotenv;

@Path("/checkout")
public class CheckoutController {

    public CheckoutController() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        Stripe.apiKey = dotenv.get("STRIPE_SECRET_KEY");
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response createCheckoutSession() {
        try {
            SessionCreateParams params = SessionCreateParams.builder()
                .addLineItem(
                    SessionCreateParams.LineItem.builder()
                        .setPrice("price_1RzTq7CZBbVVNCzDde2Gr6r6") // Replace with a test price from Stripe Dashboard
                        .setQuantity(1L)
                        .build())
                .setShippingAddressCollection(
                    SessionCreateParams.ShippingAddressCollection.builder()
                        .addAllowedCountry(SessionCreateParams.ShippingAddressCollection.AllowedCountry.US)
                        .addAllowedCountry(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CA)
                        .build())
                .addShippingOption(
                    SessionCreateParams.ShippingOption.builder()
                        .setShippingRate("shr_1RzjTSCZBbVVNCzDGmi2GCnI")
                        .build())
                .addShippingOption(
                    SessionCreateParams.ShippingOption.builder()
                        .setShippingRate("shr_1RzjTzCZBbVVNCzD1XCmfebO")
                        .build())
                .addShippingOption(
                    SessionCreateParams.ShippingOption.builder()
                        .setShippingRate("shr_1RzjWICZBbVVNCzDdLf8PnwU")
                        .build())
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/success")
                .setCancelUrl("http://localhost:3000/cancel")
                .build();

            Session session = Session.create(params);

            Map<String, String> responseData = new HashMap<>();
            responseData.put("id", session.getId());
            return Response.ok(responseData).build();

        } catch (Exception e) {
            e.printStackTrace(); // log full error
            return Response.serverError().entity("{\"error\":\"" + e.getMessage() + "\"}").build();
        }
    }
}
