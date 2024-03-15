package com.xaxis.disco.api.domain.service;

import com.xaxis.disco.api.domain.model.CreativeMatrix;
import com.xaxis.disco.api.domain.repository.CreativeMatrixRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CreativeMatrixService {

    private final CreativeMatrixRepository creativeMatrixRepository;

    public List<CreativeMatrix> get() {
        return creativeMatrixRepository.get();
    }
}
