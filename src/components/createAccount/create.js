import React from 'react'
import { image } from '../../shared/image'
import styles from "./style.module.scss"
import { Button, Col, Input, Row } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const Create = () => {
    const InputFields = [
        { placeholder: "User Name", type: "text", suffix: <UserOutlined style={{ color: '#BDBDBD' }} /> },
        { placeholder: "Email Address", type: "email", suffix: <MailOutlined style={{ color: '#BDBDBD' }} /> },
        { placeholder: "Password", type: "password", suffix: <LockOutlined style={{ color: '#BDBDBD' }} /> },
        { placeholder: "Confirm Password", type: "password", suffix: <LockOutlined style={{ color: '#BDBDBD' }} /> },
    ]

    return (
        <div className={styles.createAccountWrapper}>
            <div className={styles.heading}>
                <div className={styles.logoWrapper}>
                    <img src={image.logoSvg} />
                    <h2>NFT Marketplace</h2>
                </div>
                <div className={styles.rightSideHeadingWrapper}>
                    <h2>Marketplace</h2>
                    <h2>Rankings</h2>
                    <h2>Connect a wallet</h2>
                    <Button className={styles.rightsideHeadingButton} icon={<UserOutlined />} >Sign Up</Button>
                </div>
            </div>
            <div className={styles.rowSection}>
                <Row gutter={30} className={styles.heroSection}>
                    <Col xs={24} lg={12}>
                        <img src={image.createAccImage} style={{ maxWidth: '100%', maxHeight: '661px' }} />
                    </Col>
                    <Col xs={24} lg={12}>
                        <div className={styles.rightPane}>
                            <h1>Create Account</h1>
                            <p>Welcome! Enter Your Details and Start Creating, Collecting and Selling NFTs.</p>
                            <div className={styles.inputFields}>
                                {
                                    InputFields.map(item => <Input type={item.type}
                                        style={{ maxWidth: 350, borderRadius: 30 }}
                                        placeholder={item.placeholder}
                                        suffix={item.suffix}
                                    />)
                                }
                                <Button type='primary' className={styles.createAccountButton}>Create account</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
           <div className={styles.footerWrapper}>
           <div className={styles.footer}>
                <div>
                    <div className={styles.footerLogo}>
                        <img src={image.logoSvg} />
                        <h2>NFT Marketplace</h2>
                    </div>
                    <p>NFT marketplace UI created with Anima for Figma.</p>
                    <p>Join our Community</p>
                    <div className={styles.IconsSection}>
                        <img src={image.discordSvg} alt="discord" />
                        <img src={image.youtubeSvg} alt="youtube" />
                        <img src={image.twitterSvg} alt="twitter" />
                        <img src={image.instagramSvg} alt="instagram" />
                    </div>
                </div>
                <div>
                    <h2>Explore</h2>
                    <p>Marketplace</p>
                    <p>Rankings</p>
                    <p>Connect a Wallet</p>
                </div>
                <div className={styles.bottomsection3}>
                    <h2>Join our Weekly digest</h2>
                    <p>Get exclusive promotions & updates straight to your inbox.</p>
                    <div className={styles.bottomEmailField}>
                        <Input type='text' placeholder='Enter your email here'/>
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Create