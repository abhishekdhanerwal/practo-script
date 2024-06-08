import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from 'puppeteer';

const ERROR_MSG = 'FAILED';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method === "GET") {
        try {
            console.log('Cron job');
            res.send(200);
            // (async () => {
            //     // Launch the browser and open a new blank page
            //     const browser = await puppeteer.launch();
            //     const page = await browser.newPage();

            //     // Navigate the page to a URL
            //     await page.goto(
            //         "https://www.practo.com/delhi/doctor/vikas-jindal-gastroenterologist/recommended",
            //         { timeout: 90000 }
            //     );

            //     // Selector for the "load more comments" button
            //     const buttonSelector = ".feedback__pagination-btn";

            //     // Function to click the button and wait for comments to load
            //     async function clickAndWaitForComments() {
            //         const button = await page.$(buttonSelector);
            //         if (button) {
            //             await button.click();
            //             await page.waitForSelector(".feedback--item", { visible: true }); // Wait for new comments
            //             await new Promise((resolve) => setTimeout(resolve, 5000));
            //         }
            //     }

            //     // Loop until the button is no longer present
            //     while (await page.$(buttonSelector)) {
            //         await clickAndWaitForComments();
            //     }

            //     // Wait for the page to load completely
            //     await page.waitForSelector(".feedback--item");
            //     // Extract reviews
            //     const reviews = await page.evaluate(() => {
            //         const feedbackItems = document.querySelectorAll(".feedback--item");
            //         const extractedReviews = [];

            //         for (const item of feedbackItems) {
            //             const reviewerNameElement = item.querySelector(
            //                 '.u-bold[data-qa-id="reviewer-name"]'
            //             );
            //             const reveiwerVerifiedElementList = item.querySelectorAll(".u-bold");
            //             let isVerified = false;
            //             if (reveiwerVerifiedElementList.length === 2) {
            //                 const reveiwerVerifiedElement = reveiwerVerifiedElementList[1];
            //                 isVerified =
            //                     reveiwerVerifiedElement?.textContent?.includes("(Verified)") ?? false;
            //             }
            //             const recommendationElement = item.querySelector(
            //                 ".feedback__body > .u-large-font > span"
            //             );
            //             const happyWithElement = item.querySelector(
            //                 '.feedback__content[data-qa-id="happy-with"]'
            //             );
            //             const happyWithElementList =
            //                 happyWithElement?.querySelectorAll(".feedback__context");

            //             const happyWith = [];
            //             if (
            //                 happyWithElement &&
            //                 happyWithElementList &&
            //                 happyWithElementList.length
            //             ) {
            //                 for (const elem of happyWithElementList) {
            //                     happyWith.push(elem?.textContent?.trim() ?? "");
            //                 }
            //             }

            //             const visitedForElement = item.querySelector(
            //                 '.feedback__content[data-qa-id="visited-for"] > .procedure'
            //             );

            //             const reviewTextElementList = item.querySelectorAll(
            //                 '.feedback__content[data-qa-id="review-text"]'
            //             );
            //             const reviewTextList = [];
            //             if (reviewTextElementList && reviewTextElementList.length) {
            //                 for (const elem of reviewTextElementList) {
            //                     reviewTextList.push(elem?.textContent?.trim() ?? "");
            //                 }
            //             }

            //             extractedReviews.push({
            //                 name: reviewerNameElement?.textContent?.trim() ?? "",
            //                 isVerified,
            //                 recommendation: recommendationElement?.textContent?.trim() ?? "",
            //                 happyWith,
            //                 visitedFor: visitedForElement?.textContent?.trim() ?? "",
            //                 reviewText: reviewTextList.join(""),
            //             });
            //         }

            //         return extractedReviews;
            //     });

            //     await browser.close();
            //     res.send(200);
            // })();
        } catch (err) {
            res.status(500).send({ error: ERROR_MSG });
        }
    }
}