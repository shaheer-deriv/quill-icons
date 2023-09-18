import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivSecurityBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivSecurityBlackIcon',
  component: SubBrandDerivSecurityBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivSecurityBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivSecurityBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
