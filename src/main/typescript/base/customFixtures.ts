import { test as base } from '@playwright/test'

import { Utility } from '../helpers/Utility'
import { GoogleHomePageActions } from '../pages/actions/GoogleHomePageActions'
import { LoginPageActions } from '../pages/actions/LoginPageActions'
import {NaukariPageActions} from '../pages/actions/NaukariPageActions'

/**
 * Declare the Pages that you want to use in your test
 * */
type MyFixtures = {
    googleHomePageActions: GoogleHomePageActions
    loginPageActions: LoginPageActions
    naukariPageActions: NaukariPageActions
    utility: Utility
}

/**
 * Create a custom fixture for above page that will be used in your test
 * */

export const test = base.extend<MyFixtures>({
    googleHomePageActions: async ({ page }, use) => {
        return await use(new GoogleHomePageActions(page))
    },
    loginPageActions: async ({ page }, use) => {
        return await use(new LoginPageActions(page))
    },
    naukariPageActions: async ({ page }, use) => {
        return await use(new NaukariPageActions(page))
    },
    utility: async ({ page }, use) => {
        return await use(new Utility(page))
    },
})
export { expect } from '@playwright/test'
