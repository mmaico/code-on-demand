package mmaico.codeondemand.sellers.infrastructure;

import mmaico.codeondemand.sellers.domain.seller.Seller;
import mmaico.codeondemand.sellers.domain.seller.SellerRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class SellerRepositoryImpl implements SellerRepository {
    private  Map<String, Seller> database = new HashMap<>();

    public SellerRepositoryImpl() {
        database.put("1", new Seller("1", "Jaime Lannister", new Date(), "92170410090",
                "jlannister@got.com"));
        database.put("2", new Seller("2", "Sansa Stark", new Date(), "10782412017",
                "sstark@got.com"));
        database.put("3", new Seller("3", "Jon Snow", new Date(), "47728435078",
                "sstark@got.com"));
    }


    @Override
    public Optional<Seller> findOne(String id) {
        if (database.containsKey(id)) {
            return Optional.of(database.get(id));
        }
        return Optional.empty();
    }

    @Override
    public List<Seller> findAll() {
        return new ArrayList<>(database.values());
    }
}
