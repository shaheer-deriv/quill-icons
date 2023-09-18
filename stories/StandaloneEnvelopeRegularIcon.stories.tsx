import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEnvelopeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEnvelopeRegularIcon',
  component: StandaloneEnvelopeRegularIcon,
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
} satisfies Meta<typeof StandaloneEnvelopeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEnvelopeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
