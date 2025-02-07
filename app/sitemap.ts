export default async function sitemap() {
    const baseUrl = "https://www.capablehvac.com"
    const serviceTypeList = [
        { id: 1, type: "Heating and Cooling Repair" },
        { id: 2, type: "System Installation" },
        { id: 3, type: "Maintenance" },
    ];

    const services = serviceTypeList.map((service) => {
        return {
            url: `${baseUrl}/services/${service.type.replace(/\s/g, "-")
                .replace("/", ".")}`,
            lastModified: new Date().toISOString().split('T')[0],
        }
    })
    return [{
        url: baseUrl,
        lastModified: new Date().toISOString().split('T')[0],
    },
    ...services,
    {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString().split('T')[0],
    },
    {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString().split('T')[0],
    },
    {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString().split('T')[0],
    },

    ]

}
