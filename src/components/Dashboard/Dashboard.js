import React from 'react'
import { image } from '../../shared/image'
import styles from "./style.module.scss"
import { Button, Col, Row } from 'antd'
import TabsSwitcher from '../Tabs/Tabs'

const Dashboard = () => {
    return (
        <div>
            <img style={{ position: 'relative' }} src={image.Banner} alt='Banner' width="100%" height={300} />
            <div style={{ position: 'absolute', top: 230, left: 50 }}>
                <img style={{ border: "2px solid #2B2B2B", borderRadius: 25 }}
                    src={image.UserAvatar} alt="User Avatar" />
            </div>
            <Row className={styles.CustomRowStyle}>
                <Col xs={24} md={12}>
                    <div className={styles.profileView}>
                        <h2 className={styles.header}>AnimaKid</h2>
                        <div className={styles.heading}>
                            <div className={styles.statistics}>
                                <h3>250k+</h3>
                                <h3>50+</h3>
                                <h3>3000+</h3>
                            </div>
                            <div className={styles.statsLabel}>
                                <h3>Volume</h3>
                                <h3>NFTs Sold</h3>
                                <h3>Followers</h3>
                            </div>
                        </div>
                        <div className={styles.UsersBio}>
                            <h2>Bio</h2>
                            <p>The internet's friendliest designer kid.</p>
                        </div>
                        <div className={styles.Links}>
                            <h2>Links</h2>
                            <div className={styles.imagesSection}>
                                <img src={image.GlobeSvg} />
                                <img src={image.discordSvg} />
                                <img src={image.youtubeSvg} />
                                <img src={image.twitterSvg} />
                                <img src={image.instagramSvg} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.rightPane}>
                        <Button className={styles.copyUserDetails}>0xsd9s0dsd90i</Button>
                        <Button className={styles.followBtn}><span className={styles.plus}>+</span> Follow</Button>
                    </div>
                </Col>
            </Row>
            <TabsSwitcher />
        </div>
    )
}

export default Dashboard