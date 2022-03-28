package mmaico.codeondemand.sellers.view.support;


import mmaico.codeondemand.sellers.domain.seller.Seller;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class SellerResourceAssembler implements RepresentationModelAssembler<Seller, SellerResource> {

    @Override
    public SellerResource toModel(Seller model) {
        SellerResource resource =
                new SellerResource(model.getId(), model.getName(), model.getEnrollment(), model.getMobile(),
                        model.getEmail(), model.getCpf());

        resource.add(Link.of("/sellers/{}".replace("{}", model.getId())));
        resource.add(Link.of("/sellers/{}/contacts".replace("{}", model.getId()), "hasContacts"));

        return resource;
    }

    @Override
    public CollectionModel<SellerResource> toCollectionModel(Iterable<? extends Seller> entities) {
        return RepresentationModelAssembler.super.toCollectionModel(entities);
    }
}
