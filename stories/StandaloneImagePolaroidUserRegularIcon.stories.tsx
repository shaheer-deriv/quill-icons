import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneImagePolaroidUserRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneImagePolaroidUserRegularIcon',
  component: StandaloneImagePolaroidUserRegularIcon,
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
} satisfies Meta<typeof StandaloneImagePolaroidUserRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneImagePolaroidUserRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
