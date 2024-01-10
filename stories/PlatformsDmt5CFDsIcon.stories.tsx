import type { Meta, StoryObj } from '@storybook/react';

import { PlatformsDmt5CFDsIcon } from '../src/react/Platforms';

const meta = {
  title: 'platforms/PlatformsDmt5CFDsIcon',
  component: PlatformsDmt5CFDsIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlatformsDmt5CFDsIcon>;

export default meta;

type Story = StoryObj<typeof PlatformsDmt5CFDsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
