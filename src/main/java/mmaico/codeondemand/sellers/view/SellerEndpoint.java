package mmaico.codeondemand.sellers.view;


import mmaico.codeondemand.sellers.domain.seller.Seller;
import mmaico.codeondemand.sellers.view.support.SellerResource;
import mmaico.codeondemand.sellers.view.support.SellerResourceAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SellerEndpoint {

    private SellerResourceAssembler assembler;

    public SellerEndpoint(SellerResourceAssembler assembler) {
        this.assembler = assembler;
    }

    @GetMapping("/sellers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SellerResource findOne(@PathVariable String id) {
        Seller result = Seller.findOne(id)
                .orElseThrow(() -> new RuntimeException("Seller not found with id: " + id));

         return assembler.toModel(result);
    }


    @GetMapping ("/sellers")
    @ResponseStatus(HttpStatus.OK)
    public CollectionModel<SellerResource> getAll() {
        return assembler.toCollectionModel(Seller.findAll());
    }

}
