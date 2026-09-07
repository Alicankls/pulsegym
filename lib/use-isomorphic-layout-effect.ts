"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * İstemcide boyamadan önce, sunucuda ise hiç çalışmayan efekt.
 * `useLayoutEffect` doğrudan kullanılırsa SSR sırasında React uyarı verir.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
