// edited from https://github.com/vuepress/ecosystem/blob/main/plugins/development/plugin-active-header-links/src/client/composables/useActiveHeaderLinks.ts
import { ref } from 'vue'
import { useDebounceFn, useEventListener } from '@vueuse/core'

declare const __AHL_HEADER_ANCHOR_SELECTOR__: string
declare const __AHL_DELAY__: number
declare const __AHL_OFFSET__: number

const headerAnchorSelector = __AHL_HEADER_ANCHOR_SELECTOR__
const delay = __AHL_DELAY__
const offset = __AHL_OFFSET__

export const useActiveHeaderHash = () => {
  const hash = ref('')

  useEventListener('scroll', useDebounceFn(() => {
    // get current scrollTop
    const scrollTop = Math.max(
      window.scrollY,
      document.documentElement.scrollTop,
      document.body.scrollTop,
    )
    // check if we are at page top
    const isAtPageTop = Math.abs(scrollTop - 0) < offset

    // replace current hash with empty string when scrolling back to the top
    if (isAtPageTop) {
      hash.value = ''
      return
    }

    // get current scrollBottom
    const scrollBottom = window.innerHeight + scrollTop
    // get the total scroll length of current page
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    )
    // check if we have reached page bottom
    // notice the `scrollBottom` might not be exactly equal to `scrollHeight`, so we add offset here
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset

    // get all header anchors
    const headerAnchors: HTMLAnchorElement[] = Array.from(
      document.querySelectorAll(headerAnchorSelector),
    )

    for (let i = 0; i < headerAnchors.length; i++) {
      const anchor = headerAnchors[i]
      const nextAnchor = headerAnchors[i + 1]

      // notice the `scrollTop` might not be exactly equal to `offsetTop` after clicking the anchor
      // so we add offset

      // if has scrolled past this anchor
      const hasPassedCurrentAnchor =
        scrollTop >= (anchor.parentElement?.offsetTop ?? 0) - offset

      // if has not scrolled past next anchor
      const hasNotPassedNextAnchor =
        !nextAnchor ||
        scrollTop < (nextAnchor.parentElement?.offsetTop ?? 0) - offset

      // if this anchor is the active anchor
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor

      // continue to find the active anchor
      if (!isActive) continue

      const anchorHash = decodeURIComponent(anchor.hash)

      // if the active anchor hash is current hash, do nothing
      if (hash.value === anchorHash) return

      // check if anchor is at the bottom of the page to keep hash consistent
      if (isAtPageBottom) {
        for (let j = i + 1; j < headerAnchors.length; j++) {
          // if current hash is below the active hash, do nothing
          if (hash.value === decodeURIComponent(headerAnchors[j].hash)) {
            return
          }
        }
      }

      hash.value = anchorHash
      return
    }
  }, delay))

  return hash
}
