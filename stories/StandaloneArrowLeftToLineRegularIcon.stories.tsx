import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowLeftToLineRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowLeftToLineRegularIcon',
  component: StandaloneArrowLeftToLineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowLeftToLineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowLeftToLineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
