package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.CreativeMatrix;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CreativeMatrixRepositoryMyBatis {

    List<CreativeMatrix> get();
}
