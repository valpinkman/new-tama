import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'
import useMatchMedia from '../hooks/use-match-media'

function YoutubeVideo({ videoId, opts }: { videoId: string; opts?: { width: string; height: string } }) {
  return <Youtube videoId={videoId} opts={opts} />
}

export default YoutubeVideo