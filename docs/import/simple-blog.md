# Simple Blog

Define reusable content structures to kick start your projects.

``` json
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Section",
    "name": "Blog",
    "handle": "blog",
    "type": "channel",
    "hasUrls": true,
    "template": "blog/_entry",
    "sites": {
      "default": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "news/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      },
      "craftUk": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "news-uk/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      }
    },
    "entryTypes": [
      {
        "@model": "barrelstrength\\sproutimport\\importers\\settings\\EntryType",
        "name": "Posts",
        "handle": "posts",
        "showTitles": true,
        "titleLabel": "Title",
        "fieldLayout": {
          "fieldLayoutTab": {
            "name": "Content",
            "fields": [
              {
                "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
                "groupId": 1,
                "name": "Summary",
                "handle": "summary",
                "instructions": "",
                "type": "craft\\fields\\PlainText",
                "settings": {
                  "placeholder": "",
                  "multiline": true,
                  "initialRows": 4
                }
              },
              {
                "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
                "type": "craft\\fields\\Matrix",
                "groupId": 1,
                "name": "Longform Content Body",
                "handle": "longformContentBody",
                "instructions": "",
                "settings": {
                  "blockTypes": {
                    "new1": {
                      "name": "Heading",
                      "handle": "headingBlock",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Heading",
                          "handle": "heading",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": false
                          }
                        }
                      }
                    },
                    "new2": {
                      "name": "Subheading",
                      "handle": "subheadingBlock",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Subheading",
                          "handle": "subheading",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": false
                          }
                        }
                      }
                    },
                    "new3": {
                      "name": "Text",
                      "handle": "textBlock",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Text",
                          "handle": "text",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": true,
                            "initialRows": 8
                          }
                        }
                      }
                    },
                    "new4": {
                      "name": "Quote",
                      "handle": "quoteBlock",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Quote",
                          "handle": "quote",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": true,
                            "initialRows": 4
                          }
                        },
                        "new2": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Attribution",
                          "handle": "attribution",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": false
                          }
                        }
                      }
                    }
                  },
                  "maxBlocks": null
                }
              }
            ]
          }
        }
      }
    ]
  }
]
```