import React from 'react';
import { Tabs } from 'antd';
import styles from "./styles.module.scss"

const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of tab ${id}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero at tempore saepe. Reprehenderit, dicta praesentium ratione officiis delectus dignissimos cum libero impedit perspiciatis ullam veniam amet aliquid? Fuga porro facere laboriosam, deserunt laudantium atque voluptas vero repudiandae dolor pariatur a eius perferendis sed? Quisquam laborum eveniet mollitia quibusdam facilis saepe, odit a. Harum qui laudantium, facere iure officiis, unde temporibus, tempora doloribus dicta quasi eveniet! Autem, similique impedit? Perspiciatis molestiae totam dignissimos libero repellendus illum ea aspernatur quisquam dicta. Debitis voluptatem asperiores nesciunt, sint deserunt ratione, nisi quo fuga esse nam sapiente aut? Reprehenderit saepe ipsum vero nesciunt id impedit sequi, temporibus dicta omnis, voluptatum unde itaque molestiae rerum eligendi? Voluptatum molestiae nam, maiores quaerat minima laborum numquam quia, accusantium architecto facilis mollitia culpa pariatur! Libero consequatur, laboriosam natus consequuntur maiores exercitationem odit aliquam dolorem praesentium voluptas cum modi saepe tempore laborum perspiciatis provident aspernatur reiciendis autem. Nulla unde rem ab iusto ea hic, deleniti consectetur maiores ex aliquid. Ipsam alias, quidem blanditiis facere atque voluptas culpa soluta non assumenda animi voluptatibus laudantium labore, nam impedit possimus velit quae quisquam, cum quibusdam voluptate? Reprehenderit quos architecto consequatur quam nemo, officiis recusandae at natus est possimus quisquam, culpa quidem, consequuntur doloribus alias voluptas eveniet non harum voluptates rerum. Sapiente quam a commodi minus, recusandae cum qui? Aperiam adipisci optio atque illo molestiae porro ipsa quam cum, recusandae libero nihil numquam, perspiciatis, dolorum suscipit minima aut nam vero? Explicabo ipsa minima ipsum distinctio, possimus cum aperiam a facere non, recusandae dignissimos dolores quasi, iure officiis nisi quia fugiat ad magnam nesciunt vitae ducimus quidem voluptates. Ipsum, accusantium. Ratione illo sed magnam recusandae? Voluptate tempore veniam similique aut quidem tenetur earum minus aspernatur numquam necessitatibus. Asperiores atque optio recusandae suscipit voluptate aut beatae dolore exercitationem amet reiciendis quam, iusto corporis, labore ipsam. Doloribus. `,
    };
});


const TabsSwitcher = () => {
    return (
        <>
            <div className={styles.tabsWrapper}>
                <Tabs items={items} size='large' tabBarStyle={{ background: '#2B2B2B' }} centered tabBarGutter={70} />
            </div>
        </>
    );
};
export default TabsSwitcher;