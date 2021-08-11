import * as React from 'react';
import { getPageData, PageData } from '../../common/Data';

interface Props {
    page: any;
}

interface Ctx {
    params: {
        courseid: string;
    };
}

export default function Test(props: Props) {
    return <div>{props.page.coursemsg}</div>;
}

export function getStaticProps(ctx: Ctx) {
    const page = getPageData(ctx.params.courseid);
    return { props: { page } };
}

export function getStaticPaths() {
    const paths = PageData.map((page) => `/test/${page.courseid}`);
    return { paths, fallback: false };
}
