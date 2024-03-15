package com.xaxis.disco.api.domain.model;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class AdCreativeResponse {

    private String status;
    private String messageResult;
}