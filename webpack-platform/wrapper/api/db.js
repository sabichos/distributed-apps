export default {
    "user": {
        "customerId": "Sierra 117",
        "chType": 2,
        "firstName": "John",
        "lastName": "117",
        "companyName": "unsc.com",
        "country": "UN",
        "lastLogin": "2552-03-07 16:32",
        "allowedModules": {
            "newCard": {
                "url": "http://localhost:4501",
                "path": "cards/new-card",
                "title": "Add new Card",
                "icon": "iconCard"
            }
        },
        "sitemap": [
            {
                "key": "cards",
                "title": "Cards",
                "pathname": "cards",
                "icon": "",
                "children": [
                    {
                        "key": "new-card",
                        "title": "Add new Card",
                        "pathname": "cards/new-card",
                        "url": "http://localhost:4501",
                        "icon": "iconCard",
                    }
                ],
            }
        ],
        "resources": {}
    }
}