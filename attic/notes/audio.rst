*************************************************************************
Arto's Notes re: `audio <https://en.wikipedia.org/wiki/Digital_audio>`__
*************************************************************************

FFmpeg
======

PCM Codecs
----------

::

   $ ffmpeg -formats | fgrep PCM
   $ ffmpeg -codecs | fgrep PCM


Convert WAV to PCM
------------------

::

   $ ffmpeg -i input.wav -f s16le -acodec pcm_s16le output.pcm

   $ ffmpeg -i input.wav -f s16le -acodec pcm_s16le -ar 48k -ac 2 output.pcm

Convert PCM to WAV
------------------

::

   $ ffmpeg -f s16le -ar 48k -ac 2 -i input.pcm output.wav

   $ ffmpeg -f s16le -ar 48k -ac 2 -i input.pcm -ar 44.1k -ac 2 output.wav

Links
=====

* https://trac.ffmpeg.org/wiki/audio%20types
* https://stackoverflow.com/questions/5890499/pcm-audio-amplitude-values
