package com.xaxis.disco.api.domain.model.tiktok;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.xaxis.disco.api.domain.model.Page;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Builder
@NoArgsConstructor
public class PageResponse {

    @JsonProperty("page_info")
    private PageInfo pageInfo;

    private List<Page> list;

}
