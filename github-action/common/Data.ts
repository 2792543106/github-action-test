export const PageData = [
    { courseid: 1, coursemsg: '你好，再见！' },
    { courseid: 2, coursemsg: '莉莉安！' },
    { courseid: 3, coursemsg: '神秘！' },
];

export const getPageData = (arg: string | number) => {
    return PageData.find((page) => {
        if (page.courseid == Number(arg)) {
            return page;
        }
    });
};
