import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FAQ.module.css'

import ReactMarkdown from 'react-markdown';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


function FAQ() {

 
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgb(255,255,255)',
    }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

    const accordionData = [
        {
          id: 1,
          title: '1. How are cryptocurrencies taxed in Australia?',
          content: 'The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.',
        },
        {
          id: 2,
          title: '2. What’s the difference between long-term and short-term capital gains?',
          content: 'The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.',
        },
        {
            id: 3,
            title: '3. Do I have to pay tax on crypto-to-crypto transactions?',
            content: 'Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, its seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.'
        },
        {
            id: 4,
            title: '4. How do I lower my cryptocurrency taxes?',
            content: 'You can format text using **Markdown** or HTML tags.<br />- Use **bold** for bold text<br />- Use *italics* for italic text'
        },
        {
            id: 5,
            title: '5. Can the ATO track crypto?',
            content: 'The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, theyve been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATOs data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.'
        },
        {
            id: 6,
            title: '6. What is the best crypto tax calculator for Australia?',
            content: 'KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.'
        },
        {
            id: 7,
            title: '7. Do I have to pay tax if I lose money trading crypto?',
            content: 'In Australia, when your cryptocurrency loses value, its classified as a capital loss. This means you wont have to pay taxes on that loss. Its a way to offset any gains you might have made in other investments for tax purposes.'
        },
        {
            id: 8,
            title: '8. Is using a crypto tax calculator safe?',
            content: 'KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and computes your gains or losses based on the crypto amounts and prices involved. '
        },
        {
            id: 9,
            title: '9. Which exchanges do you support?',
            content: 'Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event, and capital gains tax is not triggered. Nevertheless, its essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX. KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.'
        },
        {
            id: 10,
            title: '10. Do I have to pay tax if I transfer crypto from one wallet to another?',
            content: 'Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event, and capital gains tax is not triggered. Nevertheless, its essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX. KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.'
        },
        {
            id: 11,
            title: '',
            content: ''
        },
        {
            id: 12,
            title: '',
            content: ''
        },

      ];

    return (
        <div className={styles.main}>
            <div className={styles.FAQsSection}>
                <div className={styles.FAQs}>
                    {accordionData.map((item) => (
                        <Accordion key={item.id} sx={{
                            margin: 0
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${item.id}-content`}
                                id={`panel${item.id}-header`}
                            >
                                <Typography sx={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                }}>{item.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ