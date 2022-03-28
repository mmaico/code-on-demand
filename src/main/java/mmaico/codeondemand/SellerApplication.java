package mmaico.codeondemand;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SellerApplication {
    private final static String NASHORN_ARGS = "nashorn.args";
    private final static String ES_6 = "--language=es6";

    public static void main(String[] args) {
        System.setProperty(NASHORN_ARGS, ES_6);
        SpringApplication.run(SellerApplication.class, args);
    }
}
