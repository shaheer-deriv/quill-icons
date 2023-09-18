import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronUpRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronUpRegularIcon',
  component: StandaloneChevronUpRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
