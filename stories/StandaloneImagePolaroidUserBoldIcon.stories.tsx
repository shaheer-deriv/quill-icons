import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneImagePolaroidUserBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneImagePolaroidUserBoldIcon',
  component: StandaloneImagePolaroidUserBoldIcon,
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
} satisfies Meta<typeof StandaloneImagePolaroidUserBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneImagePolaroidUserBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
