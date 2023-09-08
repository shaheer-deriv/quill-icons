import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneYoutubeIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneYoutubeIcon',
  component: StandaloneYoutubeIcon,
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
} satisfies Meta<typeof StandaloneYoutubeIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneYoutubeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
