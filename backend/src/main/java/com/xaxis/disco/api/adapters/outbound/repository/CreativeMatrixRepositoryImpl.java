package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.CreativeMatrix;
import com.xaxis.disco.api.domain.repository.CreativeMatrixRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class CreativeMatrixRepositoryImpl implements CreativeMatrixRepository {

    @Autowired
    private final CreativeMatrixRepositoryMyBatis repositoryMyBatis;

    @Override
    public List<CreativeMatrix> get() {
        return repositoryMyBatis.get();
    }
}
