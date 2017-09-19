import LocalizedStrings from 'react-localization';

let languages = new LocalizedStrings({
    en: {
        AppTitle: "World Clock Application",
        UTCTiming:"Coordinated Universal Time (UTC)",
        AddedTime:"Added time",
        MinusTime:"Minus time",
        Hours: "Hours",
        LanguageCode: "en-US",
        ContainsValue: "true",
        Removed: "removed success",
        Loading: "Loading...",
        Delete: "Delete",
        Select: "Add to the clock list",
        Clocks: "Clock List",
        SelectCity: "Select City",
        Added: "Added Success",
        NoCityNotice: "There is no more city to choose",
        SelectCityNotice: "Please select city from Select City screen"
    },
    cn: {
        AppTitle: "世界时钟应用程序",
        UTCTiming:"协调世界时（UTC)",
        AddedTime:"时间加",
        MinusTime:"时间减",
        Hours: "小时",
        LanguageCode: "zh-CN",
        ContainsValue: "true",
        Removed: "去除成功",
        Loading: "加载数据中...",
        Delete: "删除",
        Select: "添加到时钟列表",
        Clocks: "时钟表",
        SelectCity: "选择城市",
        Added: "添加成功",
        NoCityNotice: "没有更多的城市可供选择",
        SelectCityNotice: "请从选择城市屏幕中选择城市"
    }
});

const LanguageHelper = {
    getLanguageList: (languageType = 'en') => {
        languages.setLanguage(languageType);
        return languages;
    }
}

export default LanguageHelper;

