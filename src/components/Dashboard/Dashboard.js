import React from 'react'
import { image } from '../../shared/image'
import styles from "./style.module.scss"
import { Button, Col, Row } from 'antd'

const Dashboard = () => {
    return (
        <div>
            <img style={{ position: 'relative' }} src={image.Banner} width="100%" height={300} />
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
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <Button>0xsd9s0dsd90i</Button>
                    <Button>+ Follow</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard