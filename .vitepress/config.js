module.exports = {
    base: '/printeaseDocs/',
    title: 'Printease',
    themeConfig: {
        logo: '/logo.png',
        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    { text: 'About printease', link: '/src/guide/about-printease' },
                    { text: 'Getting Started', link: '/src/guide/gettingStarted' }
                ]
            },
            {
                text: 'tutorial',
                collapsed: true,
                items: [
                    {
                        text: 'tspl',
                        collapsed: true,
                        items: [
                            { text: 'Set encoding', link: '/src/guide/tspl/set-encoding' },
                            { text: 'Print text', link: '/src/guide/tspl/print-text' },
                            { text: 'Print Bar code', link: '/src/guide/tspl/print-barcode' },
                            { text: 'Print QR code', link: '/src/guide/tspl/print-qr-code' },
                            { text: 'Print image', link: '/src/guide/tspl/print-image' },
                        ]
                    },
                    {
                        text: 'zpl',
                        collapsed: true,
                        items: [
                            { text: 'Print text', link: '/src/guide/zpl/print-text' },
                            { text: 'Print Bar code', link: '/src/guide/zpl/print-barcode'},
                            { text: 'Print QR code', link: '/src/guide/zpl/print-qr-code' },
                            { text: 'Set encoding', link: '/src/guide/zpl/set-encoding' }
                        ]
                    },
                    {
                        text: 'esc',
                        collapsed: true,
                        items: [
                            { text: 'Print text', link: '/src/guide/esc/print-text' },
                        ]
                    }

                ]
            },
            {
                text: 'custom directive',
                collapsed: true,
                items: [
                    { text: 'directive', link: '/src/guide/custom-directive' },
                ]
            },
            {
                text: 'utils',
                collapsed: true,
                items: [
                    { text: 'Data sharding', link: '/src/guide/data-sharding' },
                ]
            },
            {
                text: 'api',
                collapsed: true,
                items: [
                    { text: 'Tspl', link: '/src/api/tspl'},
                    { text: 'Zpl', link: '/src/api/zpl'},
                    { text: 'Esc', link: '/src/api/esc'},
                    {
                        text: 'ImagePixelInformation', items: [
                            { text: 'javascript', link: '/src/api/ImagePixelInformation/JavaScriptImagePixelInformation' },
                            { text: 'uniapp', link: '/src/api/ImagePixelInformation/UniappImagePixelInformation' },
                        ]
                    },
                    {
                        text: 'dataProcessing', link: '/src/api/dataProcessing'
                    },
                    {
                        text: 'customDirective', link: '/src/api/customDirective'
                    }
                   
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/Liu-Jinshuai/printeaseDocs/tree/master/:path',
            text: 'Edit this page on GitHub'
        }
    }
}