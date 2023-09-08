import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneUserRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneUserRegularIcon',
  component: StandaloneUserRegularIcon,
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
} satisfies Meta<typeof StandaloneUserRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneUserRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
