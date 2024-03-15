package com.xaxis.disco.api.domain.model.tiktok;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@Builder
@NoArgsConstructor
public class PageInfo {

    @JsonProperty("page")
    private String page;
    @JsonProperty("page_size")
    private String pageSize;
    @JsonProperty("total_page")
    private String totalPage;
    @JsonProperty("total_number")
    private String totalNumber;
}
