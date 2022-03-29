package mmaico.codeondemand.sellers.view.support;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import mmaico.codeondemand.infrastructure.serializers.CPFMaskSerializer;
import mmaico.codeondemand.infrastructure.serializers.EmailMaskSerializer;
import mmaico.codeondemand.infrastructure.serializers.MobileMaskSerializer;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import java.util.Date;

@Relation(collectionRelation = "sellers")
public class SellerResource extends RepresentationModel<SellerResource> {
    private String id;
    private String name;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private Date enrollment;
    @JsonSerialize(using = MobileMaskSerializer.class)
    private String mobile;
    @JsonSerialize(using = EmailMaskSerializer.class)
    private String email;
    @JsonSerialize(using = CPFMaskSerializer.class)
    private String cpf;

    public SellerResource() {
    }

    public SellerResource(String id, String name, Date enrollment, String mobile, String email, String cpf) {
        this();
        this.id = id;
        this.name = name;
        this.enrollment = enrollment;
        this.cpf = cpf;
        this.mobile = mobile;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getEnrollment() {
        return enrollment;
    }

    public void setEnrollment(Date enrollment) {
        this.enrollment = enrollment;
    }

    public String getMobile() {
        return mobile;
    }

    public String getEmail() {
        return email;
    }

    public String getCpf() {
        return cpf;
    }
}
