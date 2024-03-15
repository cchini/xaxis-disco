package com.xaxis.disco.api.domain.model;

import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class Campaign {

    private long id;
    private long accountId;
    private String name;
    private Date startDate;
    private Date endDate;
    private String typeDescription;
    private BigDecimal budget;
    private String kpi;
    private BigDecimal goal;
    private short statusId;
    private GenericParametric status;
    private String modified;
    private String created;
}