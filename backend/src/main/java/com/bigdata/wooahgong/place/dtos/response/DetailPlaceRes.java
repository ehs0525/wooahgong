package com.bigdata.wooahgong.place.dtos.response;


import com.bigdata.wooahgong.place.dtos.request.CustomFeedDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class DetailPlaceRes {
    private String name;
    private String address;
    private Double avgRatings;
    private List<String> placeImages;
    private List<CustomFeedDto> feeds;

    @Builder
    public DetailPlaceRes(String name, String address, Double avgRatings, List<String> placeImages, List<CustomFeedDto> feeds) {
        this.name = name;
        this.address = address;
        this.avgRatings = avgRatings;
        this.placeImages = placeImages;
        this.feeds = feeds;
    }
}
