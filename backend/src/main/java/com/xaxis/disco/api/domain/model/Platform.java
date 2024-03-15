package com.xaxis.disco.api.domain.model;

import lombok.*;

@AllArgsConstructor
@Data
@Getter
@Setter
@Builder
public class Platform {

    private int id;
    private String name;
    private String code;
    private String enabled;

}
