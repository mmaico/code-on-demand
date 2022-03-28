package mmaico.codeondemand.sellers.domain.seller;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import static mmaico.codeondemand.infrastructure.ServiceLocator.getBean;


public class Seller {

    private final String id;
    private final String name;
    private final Date enrollment;
    private final String cpf;
    private final String mobile;
    private final String email;

    public Seller(String id, String name, Date enrollment, String cpf, String mobile, String email) {
        this.id = id;
        this.name = name;
        this.enrollment = enrollment;
        this.cpf = cpf;
        this.mobile = mobile;
        this.email = email;

    }

    public static Optional<Seller> findOne(String id) {
        return getBean(SellerRepository.class).findOne(id);
    }

    public static List<Seller> findAll() {
        return getBean(SellerRepository.class).findAll();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getEnrollment() {
        return enrollment;
    }

    public String getCpf() {
        return cpf;
    }

    public String getMobile() {
        return mobile;
    }

    public String getEmail() {
        return email;
    }
}
