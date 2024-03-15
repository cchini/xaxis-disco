package com.xaxis.disco.api.domain.model;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class CreativeMatrix {

    private long id;
    private String name;
    private short statusId;
    private GenericParametric status;
    private String typeDescription;
    private long accountId;
    private boolean deleted;
    private String created;
    private String modified;
}