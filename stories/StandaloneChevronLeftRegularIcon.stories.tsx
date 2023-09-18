import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronLeftRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronLeftRegularIcon',
  component: StandaloneChevronLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
