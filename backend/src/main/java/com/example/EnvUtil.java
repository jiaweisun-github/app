package com.example;

import java.util.Optional;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

@Singleton
public class EnvUtil {
    private String StripePrivateKey;

    @Inject
    public void Config() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        this.StripePrivateKey = Optional.ofNullable(dotenv.get("STRIPE_SECRET_KEY"))
                                        .orElse(System.getenv("STRIPE_SECRET_KEY"));
    }

    public String getStripePrivateKey() { return StripePrivateKey; }
}
