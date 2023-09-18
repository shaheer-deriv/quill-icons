import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronDownRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronDownRegularIcon',
  component: StandaloneChevronDownRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
