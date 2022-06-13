/*
 * Copyright 2022 Nefo Fortressia and contributors. All Rights Reserved
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */


import React from "react";

export default function PortfolioPage() {
    const isBrowser = typeof window !== 'undefined'
    const isNodejs = !isBrowser

    // We skip rendering the interactive map on the server-side (SSR'ing a map is mostly useless).
    if (isNodejs) {
        return <div>Loading...</div>
    }

    // We lazily load `<SomeHeavyMapComponent>`
    // @ts-ignore
    const ParallaxPage = React.lazy(() => import('./client-side'))
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ParallaxPage/>
        </React.Suspense>
    )
}