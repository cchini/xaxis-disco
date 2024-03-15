package com.xaxis.disco.api.domain.model.meta;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class WrapperMeta<T> {

    private T data;
}
