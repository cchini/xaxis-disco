package com.xaxis.disco.api.domain.model.tiktok;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class WrapperTikTok<T> {

    private T data;
}
