package mmaico.codeondemand.sellers.domain.seller;

import java.util.List;
import java.util.Optional;

public interface SellerRepository {

    Optional<Seller> findOne(String id);
    List<Seller> findAll();
}
