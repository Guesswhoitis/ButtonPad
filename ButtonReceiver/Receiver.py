#!/usr/bin/env python

import asyncio
import websockets

async def echo(websocket):
    async for message in websocket:
        await websocket.send(message)

async def main():
    async with websockets.serve(echo, "192.168.56.1", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())